// cái khoá học của tôi 
{
    userId: number

    mycourse: [
        {
        "idCourses": 3,
        "image": "",
        "namecourse": "[Fulltime] Web-back-end NextJS Fudamental",
        "lesson": "10 bài học",
        "hours": "170 giờ",
        "session": [
            {
                "course": "JS_BE_01: Bài 1: Tổng quan về lập trình server side,kiến trúc và cách vận hành của nodejs"
            },
            {
                "course": "NodeJs fudamental 01"
            },
            {
                "course": "overview2"
            },
            {
                "course": "overview3"
            }
  
        },



          {
        "idCourses": 3,
        "image": "",
        "namecourse": "[Fulltime] Web-back-end NextJS Fudamental",
        "lesson": "10 bài học",
        "hours": "170 giờ",
        "session": [
            {
                "course": "JS_BE_01: Bài 1: Tổng quan về lập trình server side,kiến trúc và cách vận hành của nodejs"
            },
            {
                "course": "NodeJs fudamental 01"
            },
            {
                "course": "overview2"
            },
            {
                "course": "overview3"
            }
  
        },



          {
        "idCourses": 3,
        "image": "",
        "namecourse": "[Fulltime] Web-back-end NextJS Fudamental",
        "lesson": "10 bài học",
        "hours": "170 giờ",
        "session": 
            {
                "course": "JS_BE_01: Bài 1: Tổng quan về lập trình server side,kiến trúc và cách vận hành của nodejs"
            },
            {
                "course": "NodeJs fudamental 01"
            },
            {
                "course": "overview2"
            },
            {
                "course": "overview3"
            }
  
        }
    ]
}



//push myCousre 

//thang user no dang luu tren local 


//add vào được rồi 

==> render ra phía my Cousre

   dựa vào thằng user đang đăng nhập 
   mà thằng user của bạn đang lưu ở local 
    ở component myCourse lấy ra userLogin 
    sau đó lấy state mycourse từ redux về bằng useSelector 
    filter hoặc find để lấy ra user tương(check xem nó bằng không) ==> nếu như không có hiển thị ra là bạn chưa có khoá học 

    khi mà vào khoá học(details) phải kiểm tra xem user nó khoá học đó hay chưa ==> có rồi thì disble nút button hoặc chuyển thành nút "Go to Khoá học của bạn" và khi click vào nó sẽ navigate sang trang khoá học của tôi 


    tính năng xoá khoá học của tôi 
    xoá nó đi 