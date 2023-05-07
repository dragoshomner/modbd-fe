import { Router } from "express";
import { AddressEU } from '../models/eu/address.js'
import { AddressAM } from "../models/am/address.js";

const router = Router();

const regions = {
  eu: AddressEU,
  am: AddressAM
}

router.get('/:region', async (req, res) => {
  const { region } = req.params;
  regions[region].findAll({
      raw: true
    })
      .then(records => {
        res.json(records)
      })
      .catch(err => res.status(500).json({ error: err.message }));
  
});

router.get('/:region/:id', async (req, res) => {
  const { region } = req.params;
  regions[region].findAll({
    where: { addressId: req.params.id },
    raw: true
  })
    .then(record => {
      res.json(record)
    })
    .catch(err => res.status(500).json({ message: err.message }));
});

router.post('/:region', async (req, res, next) => {
  const { region } = req.params;
  regions[region].create(req.body)
    .then((item) => {
      res.status(201)
      res.send({ message: "Resource created successfully"});
    })
    .catch(next);
});

router.put('/:region/:id', async (req, res, next) => {
  const { region, id } = req.params;
  regions[region].update(
    req.body,
    { where: { addressId: id } }
  ).then((result) => {
    if (result[0]) res.json({ message: 'Record modified' });
    else res.status(404).json({ message: 'Record not found' });
  })
    .catch(next);
});

export { router as addressRouter };