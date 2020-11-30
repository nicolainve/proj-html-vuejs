/**
 * VUE JS
*/

const app = new Vue({
    el: '#app',
    data: {
        navbarHeader: [
            {
                text: 'Home',
                dropdown: 'fas fa-angle-down',
            },
            {
                text: 'Pages',
                dropdown: 'fas fa-angle-down',
            },
            {
                text: 'Courses',
                dropdown: 'fas fa-angle-down',
            },
            {
                text: 'Features',
                dropdown: 'fas fa-angle-down',
            },
            {
                text: 'Blog',
                dropdown: 'fas fa-angle-down',
            },
            {
                text: 'Shop',
                dropdown: 'fas fa-angle-down',
            },
            {
                class: 'fas fa-user-circle',
            },
            {
                class: 'fas fa-shopping-cart',
            }
            ]
    }
});