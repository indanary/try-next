export default function handler(req: any, res: any) {
	res.setPreviewData({user: "Indana"})
	res.redirect(req.query.redirect)
}
