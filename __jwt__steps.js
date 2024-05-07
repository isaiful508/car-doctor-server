/**
 * install jsonwebtoken
 * jwt.sign (payload, secret, {expiresIn:})
 * token send to client server
 * 
 * 
 * 
 */




/***
 * ------HOW TO STORE TOKEN IN CLIENT SIDE
 * 1.memory
 * 2.local storage
 * 3.cookies : http only
 * 
 * 
 */

/***
 * 1.set cookies with http only.for devlopment secure : false
 * 
 * 2.cors
 * app.use(cors({
  origin : ['http://localhost:5173'],
  credentials: true
}))
 * 3.client side axios setting
 * in axios set withCredentilas : true
 * 
 * 
 */


/**
 * 1.to send cookies from the client make sure  you added for crendentials true for api call using axios
 * 2.use cookies parser for middleware
 * 
 * 
 * 
 * 
 */