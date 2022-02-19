const asyncHandler = require("express-async-handler");

// @des     Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler((req, res) => {
	res.status(200).json({ message: "Get goals" });
});

// @des     Set goal
// @route   POST /api/goals
// @access  Private
const setGoals = asyncHandler((req, res) => {
	if (!req.body.text) {
		res.status(400);

		throw new Error("Please add a text field.");
	}

	res.status(200).json({ message: "Set goal" });
});

// @des     Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoals = asyncHandler((req, res) => {
	res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @des     Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoals = asyncHandler((req, res) => {
	res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
	getGoals,
	setGoals,
	updateGoals,
	deleteGoals,
};
