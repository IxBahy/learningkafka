import { validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

export const handleInputError = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(400);
		res.json({ errors: errors.array() });
		return res;
	}
	next();
};
