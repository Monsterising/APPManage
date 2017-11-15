// var uploadCard = new Vue({
//   el: '.uploadCard',
//   data: {
//     message: 'Hello Vue!'
//   },
//   methods:{
//   	selectFile:function(event){
//   		// alert("selectFile");
//   		$("#file").trigger("click");  
//   	}
//   }
// })
new Vue({
  el: '.appList'
})
$(function(){ 
    //阻止浏览器默认行。 
    $(document).on({ 
        dragleave:function(e){    //拖离 
            e.preventDefault(); 
        }, 
        drop:function(e){  //拖后放 
            e.preventDefault(); 
        }, 
        dragenter:function(e){    //拖进 
            e.preventDefault(); 
        }, 
        dragover:function(e){    //拖来拖去 
            e.preventDefault(); 
        } 
    }); 


    var box = document.getElementById('drop_area'); //拖拽区域 
    box.addEventListener("drop",function(e){ 
        e.preventDefault(); //取消默认浏览器拖拽效果 
        var fileList = e.dataTransfer.files; //获取文件对象 
        //检测是否是拖拽文件到页面的操作 
        if(fileList.length == 0){ 
            return false; 
        }

        if(fileList.length > 1) {
          alert("一次只能上次一个文件。");
          return false; 
        }

        if(fileList[0].name.indexOf('apk') === -1){ 
            alert("不支持的文件类型！"); 
            return false; 
        } 


        console.log(fileList[0].name);

        // //上传 
        // xhr = new XMLHttpRequest(); 
        // xhr.open("post", "upload.php", true); 
        // xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); 
         
        // var fd = new FormData(); 
        // fd.append('mypic', fileList[0]); 
             
        // xhr.send(fd); 
        //弹出文件信息框
        $('#apkInfoModal').modal({
          keyboard: true
        });

    },false); 
    
}); 


