/*
    When you use generic routes, you are more exposed security-wise.
    Limit which roles / states access which routes with ACL.
    Also be aware that concatenating the table names opens to SQL-injections.
    There are connectors with table name replacement too, but none that I know of for SQLite.
    The concatenation of columns below is actually safe,
    since only the keys are concatenated; the values are replaced.
*/
import {Router} from "express";

const router = Router()

router.get('/:table', (request, response) => {
    let query = "SELECT * FROM " + request.params.table
    let result = request.db.prepare(query).all()
    response.json(result)
})

router.get('/:table/:id', (request, response) => {
    let query = "SELECT * FROM " + request.params.table + " WHERE id = @id"
    let result = request.db.prepare(query).all(request.params)
    response.json(result[0])
})

router.post('/:table', (request, response) => { // limit which tables to query with ACL
    let query = `INSERT INTO ${request.params.table} (${Object.keys(request.body).join(', ')})
                 VALUES (@${Object.keys(request.body).join(', @')})`
    let result
    try {
        result = request.db.prepare(query).run(request.body)
    }
    catch (e) {
        console.error(e)
    }
    response.json(result)
})

router.put('/:table/:id', (request, response) => { // limit which tables to query with ACL
    request.body.id = request.params.id // move/replace the id into the body, so it can be passed with the other replacements
    let query = `UPDATE ${request.params.table} SET`
    for (let key of Object.keys(request.body)) {
        query += ` ${key}=@${key},`
    }
    query = query.replace(/,$/, '')
    query += ` WHERE id = @id`
    let result
    try {
        result = request.db.prepare(query).run(request.body)
    }
    catch (e) {
        console.error(e)
    }
    response.json(result)
})

router.delete('/:table/:id', (request, response) => {
    // noinspection SqlResolve
    let query = `DELETE FROM ${request.params.table} WHERE id = @id`
    let result
    try {
        result = request.db.prepare(query).run({id: request.params.id})
    }
    catch (e) {
        console.error(e)
    }
    response.json(result)
})

export default router
