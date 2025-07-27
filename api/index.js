export default function handler(req, res) {
    const { q } = req.query;
    res.setHeader("Content-Type", "text/plain");
    res.send(q || "");
}
