const path = require('path');

const SRC_DIR = path.join(__dirname, '../../src');
const BUILD_DIR = path.join(__dirname, '../../build');
const reStyle = /\.(css|less|styl|scss|sass|sss)$/;

module.exports = {
    SRC_DIR,
		BUILD_DIR,
		reStyle
};
