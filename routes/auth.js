// routes/auth.js
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: 사용자 회원가입
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: 회원가입 성공
 *       400:
 *         description: 잘못된 요청
 */
router.post("/signup", (req, res) => {
  const { userid, password, email, name, phone } = req.body;
  // DB 저장 로직 생략
  res.status(201).json({ message: "회원가입 성공" });
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: 사용자 로그인
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: 로그인 성공
 *       401:
 *         description: 인증 실패
 */
router.post("/login", (req, res) => {
  const { userid, password } = req.body;
  // 인증 로직 생략
  res.status(200).json({ message: "로그인 성공" });
});

/**
 * @swagger
 * /user:
 *   put:
 *     summary: 회원정보 수정
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: 회원정보 수정 완료
 *       400:
 *         description: 요청 오류
 */
router.put("/user", (req, res) => {
  const { userid, email, name, phone } = req.body;
  // 수정 로직 생략
  res.status(200).json({ message: "회원정보 수정 완료" });
});

/**
 * @swagger
 * /user:
 *   delete:
 *     summary: 회원 탈퇴
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *     responses:
 *       200:
 *         description: 회원 탈퇴 완료
 *       400:
 *         description: 요청 오류
 */
router.delete("/user", (req, res) => {
  const { userid } = req.body;
  // 삭제 로직 생략
  res.status(200).json({ message: "회원 탈퇴 완료" });
});

module.exports = router;
