$(document).ready(function () {
    
    let writeType = getParameterByName('writeType');
    if (writeType === null || !(writeType === 'lost' || writeType === 'found')) {
        alert('잘못된 경로로 접근하였습니다.');
        location.href = '/WEB/index.html';
    }

    $('#date').datepicker({
        format: "yyyy-mm-dd", 
        autoclose : true, 
        todayHighlight : true, 
        language : "ko"
    }).datepicker("setDate", new Date());

    $('#time').timepicki();

    $("#type").val(writeType === 'lost' ? "찾아주세요!" : "찾아가세요!").prop("selected", true);
    // sessionStorage.setItem('userID', 'TEST');
    $("#user").val(sessionStorage.getItem('userID'));
});

function getParameterByName(name) { 
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
    let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), 
    results = regex.exec(location.search); 
    return results == null ? null : decodeURIComponent(results[1].replace(/\+/g, " ")); 
}

let fileList; 

function uploadImgPreview() {
    fileList = document.getElementById( "upload" ).files;
    
    function readAndPreview( fileList ) {
        if ( /\.(jpe?g|png|gif)$/i.test(fileList.name)) {
            let reader = new FileReader();
            reader.addEventListener( "load", function() {
                let image = new Image();
                image.width = "280";
                image.height = "280";
                image.title = fileList.name;
                image.src = this.result;
                document.getElementById( "uploadImgs" ).appendChild(image);
            }, false );
            // @details readAsDataURL( )을 통해 파일의 URL을 읽어온다.
            if( fileList ) {
                reader.readAsDataURL( fileList );
            }
        }
    }
    if(fileList) {
        [].forEach.call( fileList, readAndPreview );
    }
}

function fnResetUploadImage() {
    if (fileList) {
        console.log('s');
    }
}