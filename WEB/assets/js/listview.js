$(document).ready(function () {
    var table = $('#listview').DataTable({
        "ajax" : {
            url : '/WEB/assets/data.json', 
            type : 'GET', 
            error : function(xhr, status, error) {
                // console.log(xhr);
            }
        }, 
        "order" : [[0, 'asc']], 
        "language" : {
            "decimal" : "",
            "emptyTable" : "데이터가 없습니다.",
            "info" : "_START_ ~ _END_ (총 _TOTAL_ 개의 데이터가 있습니다.)",
            "infoEmpty" : "0명",
            "infoFiltered" : "(전체 _MAX_ 명 중 검색결과)",
            "infoPostFix" : "",
            "thousands" : ",",
            "lengthMenu" : "_MENU_ 개씩 보기",
            "loadingRecords" : "로딩중...",
            "processing" : "처리중...",
            "search" : "검색 : ",
            "zeroRecords" : "검색된 데이터가 없습니다.",
            "paginate" : {
                "first" : "첫 페이지",
                "last" : "마지막 페이지",
                "next" : "다음",
                "previous" : "이전"
            },
            "aria" : {
                "sortAscending" : " :  오름차순 정렬",
                "sortDescending" : " :  내림차순 정렬"
            }
        }, 
        "columnDefs": [{ 
            targets : 0, 
            className : 'dt-center'
        }, {
            targets : 1, 
            className : 'dt-left'
        }, {
            targets : 2, 
            className : 'dt-center'
        }, {
            targets : 3, 
            className : 'dt-center', 
            render : function(data, type) {
                if (type == 'display') {
                    if (data == '1') {
                        return '처리완료 <i class="fa fa-3 fa-check-circle datatable-paid-1"></i>';
                    } else if (data == '2') {
                        return '처리중 <i class="fa fa-3 fa-exclamation-circle datatable-paid-0"></i>';
                    } else if (data == '3') {
                        return '<i class="fa fa-3 fa-exclamation-circle datatable-paid-0"></i>';
                    }
                } else {
                    return data;
                }
            }
        }, {
            targets: -1,
            className: 'dt-center',
            data: null,
            defaultContent: "<button>자세히 보기</button>"
        }],
        
        initComplete: function () {
            this.api().column().eq(0).each( function () {
                var column = this.column(2);
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.header()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
 
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );
 
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            });
        }
        
    });

    $('#listview tbody').on('click', 'button', function () {
        var data = table.row( $(this).parents('tr') ).data();
        console.log(`${data[4]}번째 글입니다.`);
    });
});
