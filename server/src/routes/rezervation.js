import { Router } from "express";
import { RezervationEU } from '../models/eu/rezervation.js'
import { RezervationAM } from "../models/am/rezervation.js";
import { RezervationGlobal } from "../models/global/rezervation.js";

const router = Router();

const regions = {
  eu: RezervationEU,
  am: RezervationAM,
  global: RezervationGlobal
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
      where: { rezervationId: req.params.id },
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
    regions[region].create(req.body)
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
      { where: { rezervationId: id } }
    ).then((result) => {
      if (result[0]) res.json({ message: 'Record modified' });
      else res.status(404).json({ message: 'Record not found' });
    })
      .catch(next);
  }
});

export { router as rezervationRouter };