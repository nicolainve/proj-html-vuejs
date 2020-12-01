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
                class: 'fas fa-shopping-cart',
            },
            {
                class: 'fas fa-user-circle',
            }
        ],
        mail: 'support@maxcoach.com',
        socials: ['fab fa-facebook-square', 'fab fa-twitter', 'fab fa-instagram', 'fab fa-linkedin'],
        exploreMenu: ['Start here', 'Success story', 'Blog', 'Courses', 'About us', 'Contact us'],
        informationMenu: ['Membership', 'Purchase guide', 'Privacy policy', 'Terms of services']
    }
});