export default ({ store, redirect }) => {
    if (!store.$auth.loggedIn) {
        redirect('/backend/signin');
    }
}