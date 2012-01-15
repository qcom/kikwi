// GET Home Page

exports.index = function(req, res){
  res.render('index', { title: 'Kikwi' });
};

exports.shop = function(req, res) {
	res.render('shop', { title: 'Shop' });
};