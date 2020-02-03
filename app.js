const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index', {
		firstName: "Chuck",
		lastName: "Norris"
	})
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});