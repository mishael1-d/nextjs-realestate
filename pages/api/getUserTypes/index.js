export default function handler(req, res) {
    res.status(200).json([{ id: 0, role: 'customer'}, { id: 1, role: 'property owner'}, { id: 2, role: 'real estate agent'}]);
  }
  