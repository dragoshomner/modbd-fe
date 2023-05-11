import { Router } from "express";
import { ClientGlobal } from "../models/global/client.js";

const router = Router();

const regions = {
  eu: undefined,
  am: undefined,
  global: ClientGlobal
}

router.get('/:region', async (req, res) => {
  const { region } = req.params;
  if (Object.keys(regions).includes(region)) {
    regions['global'].findAll({
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
    regions['global'].findAll({
      where: { clientId: req.params.id },
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
  req.body.premiumGuest = req.body.premiumGuest ? 1 : 0;
  if (Object.keys(regions).includes(region)) {
    regions['global'].create(req.body, { returning: false })
      .then((item) => {
        res.status(201)
        res.send({ message: "Resource created successfully"});
      })
      .catch(next);
    }
});

router.put('/:region/:id', async (req, res, next) => {
  const { region, id } = req.params;
  req.body.premiumGuest = req.body.premiumGuest ? 1 : 0;
  if (Object.keys(regions).includes(region)) {
    regions['global'].update(
      req.body,
      { where: { clientId: id } }
    ).then((result) => {
      if (result[0]) res.json({ message: 'Record modified' });
      else res.status(404).json({ message: 'Record not found' });
    })
      .catch(next);
  }
});

export { router as clientRouter };