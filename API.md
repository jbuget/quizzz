-- Quiz listing (public, own and user's ones)
GET /quizzes
GET /user/quizzes
GET /users/:username/quizzes

-- Quiz edition & publication
POST /quizzes
GET /quizzes/:quiz_uuid
PATCH /quizzes/:quiz_uuid
DELETE /quizzes/:quiz_uuid
POST /quizzes/:quiz_uuid/question
PATCH /quizzes/:quiz_uuid/question/:question_uuid
DELETE /quizzes/:quiz_uuid/question/:question_uuid
PUT /quizzes/:quiz_uuid/publication
DELETE /quizzes/:quiz_uuid/publication

-- Play
POST /games
GET /games/:game_uuid
POST /games/:game_uuid/answer

-- Gamer profile
GET /user/profile
GET /users/:username/profile
GET /user/games