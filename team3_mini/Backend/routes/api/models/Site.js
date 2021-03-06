const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SiteSchema = new Schema({
    
    
    category_id : { // 카테고리 추가 시 생성되는 고유아이디
                // (사용자, 해당 사용자가 추가한 카테고리)에 대한 고유아이디값
        type: Schema.Types.ObjectId, //  category table id
        ref: 'categories'

    },
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    like_user_id:[{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }],

    title : {
        type: String,
        required: true,
        trim: true
    },

    url : {
        type: String,
        required: true
    },
    
    description : {
        type: String, 
        required: true
    },
    files : [{
        type: String      
    }],

   
    
    /*
    double_id : {
        type: String,
        required: true,
        trim: true
    },

    double_pw : {
        type: String,
        required: true,
        trim: true
    },
    */
    
    open : {
        type: Boolean,
        required: true
    }, // 비공개/공개 여부

    like : {
        type: Number,
        default: 0
    } // 좋아요 수 
    ,
    time : {

        type: Date,
        default: Date.now()
        
    }
   

});

module.exports = mongoose.model('sites', SiteSchema);
