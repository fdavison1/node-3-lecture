module.exports = {
    getAllUsers(req, res) {
        const db = req.app.get('db')
        db.get_all_users()
            .then(result => {
                res.status(200).send(result)
            }).catch(err => {
                console.log(err)
            })
    },
    addUser(req, res) {
        const db = req.app.get('db')
        const { first_name, last_name, address, phone_num } = req.body
        db.add_user({
            first_name: first_name,
            last_name: last_name,
            address: address,
            phone_num: phone_num
        })
            .then(result => {
                res.status(200).send(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    updateAddress(req, res) {
        const db = req.app.get('db')
        db.update_address([req.body.address, req.params.id])
            .then(result => {
                res.status(200).send(result)
            })
    },
    deleteUser(req, res){
        const db = req.app.get('db')
        db.delete_user(req.params.id)
        .then(result => {
            res.status(200).send(result)
        })
    }
}