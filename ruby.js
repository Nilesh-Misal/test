const { metacall, metacall_load_from_file } = require('metacall');
 
metacall_load_from_file('rb', [ 'D:/generator-ak-2/add.rb']);

metacall('sum', 3, 4); // 7

