function Hello() {
	this.say = function() {
	    console.log('来自module-file的方法')
	}
};
module.exports = Hello;
