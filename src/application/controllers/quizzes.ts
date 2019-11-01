import {Request, Response} from "express";

/**
 * GET /api
 * List of API examples.
 */
export const findPublicQuizzes = (req: Request, res: Response) => {
    res.json([]);
};

