const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');
const employeeSchema = require('../models/employee')
const consumerSchema = require('../models/consumer')



function initalize(passport) {
    // Consumer Strategies
    passport.use('local-consumer-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
        }, async (email, password, done) => {
            try {

                console.log(email)
                let DBuser = await consumerSchema.findOne({ "local.email": email })
                if (!DBuser) return done(null, false, { message: '404 User not found' })

               
                bcrypt.compare(password, DBuser.local.password, function(err, result) {
                    if (err) throw err;
                    if (result) {
                        return done(null, DBuser)
                    } else {
                        return done(null, false, { message: '404 User not found' })
                    }
                });
            } catch (err) {
                return done(err)
            }
        }
    ))

    passport.use('local-consumer-register', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
        }, async (req, email, password, done) => {
            let username = req.body.username;
            try {
                if (!password || !email || !req.body.username) return done(null, false)
                if (password.length < 8 || !password.match(/[^A-Za-z0-9]+/g) || !password.match(/[0-9]+/g)) return done(null, false) 
                if (req.body.username.length < 3 || req.body.username.length > 16) return done(null, false)
                if (await consumerSchema.findOne({ 'local.username': req.body.username })) return done(null, false)
                if (await consumerSchema.findOne({ 'local.email': email })) return done(null, false)
                console.log("Entered")
        
                let DBUser = await consumerSchema.create({
                    local: {
                        email: email,
                        username: username,
                        password: await bcrypt.hash(password, 10),
                    },
                    roles: ["guest"],
                    verified: false
                })
                if (DBUser) return done(null, DBUser)

                return done(null, false)
            } catch (err) {
                return done(err)
            }
        }
    ))
        // Employee Strategies
        passport.use('local-employee-login', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
            }, async (email, password, done) => {
                try {
    
                    console.log(email)
                    let DBuser = await employeeSchema.findOne({ "local.email": email })
                    if (!DBuser) return done(null, false, { message: '404 User not found' })
    
                    if (!DBuser.verified) return done(null, false, { message: 'Please Verify Your Email' })
                   
                    bcrypt.compare(password, DBuser.local.password, function(err, result) {
                        if (err) throw err;
                        if (result) {
                            return done(null, DBuser)
                        } else {
                            return done(null, false, { message: '404 User not found' })
                        }
                    });
                } catch (err) {
                    return done(err)
                }
            }
        ))
    
        passport.use('local-employee-register', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
            }, async (req, email, password, done) => {
                let username = req.body.username;
                try {
                    if (!password || !email || !req.body.username) return done(null, false, { message: 'Please Fill Out All Fields' })
                    if (password.length < 8 || !password.match(/[^A-Za-z0-9]+/g) || !password.match(/[0-9]+/g)) return done(null, false, { message: 'Password must be at least 8 characters long, contain at least one number, and contain at least one special character' }) 
                    if (req.body.username.length < 3 || req.body.username.length > 16) return done(null, false, { message: 'Username must be between 3 and 16 characters long' })
                    if (await employeeSchema.findOne({ 'local.username': req.body.username })) return done(null, false, { message: 'Username is Already Taken' })
                    if (await employeeSchema.findOne({ 'local.email': email })) return done(null, false, { message: 'Email is Already Taken' })
                    
                    const counter = await employeeSchema.findOne({ _id: "0" })
                    let newID = counter.count + 1;
                    let DBUser = await employeeSchema.create({
                        _id: newID,
                        local: {
                            email: email,
                            username: username,
                            password: await bcrypt.hash(password, 10),
                        },
                        roles: ["guest"],
                        verified: false
                    })
                    if (DBUser) return done(null, DBUser)
    
                    return done(null, false, { message: 'System Error, Please Retry.' })
                } catch (err) {
                    return done(err)
                }
            }
        ))

    passport.serializeUser((user, done) => done(null, user))
    passport.deserializeUser((id, done) => {done(null, id)})


}
module.exports = initalize