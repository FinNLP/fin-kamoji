const kamojis = require('./list.js');

const kamojiToPlaceholder = {
	id:"lexer-transformer",
	extension:{
		level:"sentence",
		when:"initial",
		transformer:function(str){
			for (var i = kamojis.length - 1; i >= 0; i--) {
				str = str.split(kamojis[i]).join(`KAMOJI-PLACEHOLDER-${i}`);
			}
			return str;
		}
	}
};


const placeholderToKamoji = {
	id:"lexer-transformer",
	extension:{
		level:"token",
		when:"initial",
		transformer:function(arr){
			arr = arr.map((token)=>{
				if(typeof token === "string" && token.startsWith("KAMOJI-PLACEHOLDER-")) {
					return {
						token:kamojis[token.substr(19)*1],
						meta:{
							kamoji:true,
							em:true
						}
					};
				}
				else return token;
			});
			return arr;
		}
	}
};

const lexicon = {
	id:"lexicon",
	extension:{}
};

kamojis.forEach((k)=>lexicon.extension[k]="EM|KA");

module.exports = [
	lexicon,
	placeholderToKamoji,
	kamojiToPlaceholder
];