import { Router } from "express";
import { CityEU } from '../models/eu/city.js'
import { CityAM } from "../models/am/city.js";
import { CityGlobal } from "../models/global/city.js";

const router = Router();

const regions = {
  eu: CityEU,
  am: CityAM,
  global: CityGlobal
}

router.get('/:region', async (req, res) => {
  const { region } = req.params;
  if (Object.keys(regions).includes(region)) {
    regions[region].findAll({
        raw: true
      })
        .then(records => {
          res.json(records)
        })
        .catch(err => res.status(500).json({ error: err.message }));
      }
  
});

router.get('/:region/:id', async (req, res) => {
  const { region } = req.params;
  if (Object.keys(regions).includes(region)) {
    regions[region].findAll({
      where: { cityId: req.params.id },
      raw: true
    })
      .then(record => {
        res.json(record[0]);
      })
      .catch(err => res.status(500).json({ message: err.message }));
    }
});

router.post('/:region', async (req, res, next) => {
  const { region } = req.params;
  if (Object.keys(regions).includes(region)) {
    regions[region].create(req.body, { returning: false })
      .then((item) => {
        res.status(201)
        res.send({ message: "Resource created successfully"});
      })
      .catch(next);
    }
});

router.put('/:region/:id', async (req, res, next) => {
  const { region, id } = req.params;
  if (Object.keys(regions).includes(region)) {
    regions[region].update(
      req.body,
      { where: { cityId: id } }
    ).then((result) => {
      if (result[0]) res.json({ message: 'Record modified' });
      else res.status(404).json({ message: 'Record not found' });
    })
      .catch(next);
  }
});

export { router as cityRouter };