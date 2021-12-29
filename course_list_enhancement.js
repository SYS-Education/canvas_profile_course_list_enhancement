/*
The following code re-roders the "Courses" list in the "Enrollments" section on the admin user profile page in Canvas.
First, it will check if the current page is the admin user profile page by checking the current URL. If not, the code will not run.
The list of courses is re-ordered so that active courses will be placed at the top of the list, while preserving the alphabetical order that
the active courses would were listed in. All non-active courses are left in their original order below the active courses.
*/
function reorder_profile_course_list() {
    let currentPage = window.location.pathname;
    if(currentPage.includes("/users/") && !currentPage.includes("user_notes") && !currentPage.includes("courses")){
        var list = document.getElementsByClassName("unstyled_list context_list")[0];
        // Optional line to double the height of the courses list:
        // list.style.maxHeight = "400px"
        var items = list.getElementsByTagName('li');
        var stop = 0;
        index = items.length - 1;
        while(index > stop) {
            if(items[index].classList.contains("active")){
                items[index].parentNode.insertBefore(items[index], items[0]);
                stop++;
            } else { 
                index--;
            }
        }
    }
  }
