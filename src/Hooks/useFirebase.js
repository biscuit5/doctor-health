import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,getIdToken,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,updateProfile,signOut  } from "firebase/auth";


initializeAuthentication()
const useFirebase = ()=>{
		const[user,setUser]= useState({});
		const[isLoading,setIsLoading]=useState(true)
		const [authError,setAuthError] = useState('');
		const [admin,setAdmin] = useState(false);
		const [token, setToken] = useState('')
		const auth = getAuth();
		const googleProvider = new GoogleAuthProvider()

		const registerUser =(email,password,name,Navigate)=>{
			setIsLoading(true)
			createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		setAuthError('')
		const newUser = {email,displayName:name}
		setUser(newUser)
		saverUser(email,name,'POST')
		// send first create account
		updateProfile(auth.currentUser, {
			displayName: name
		}).then(() => {
			
		}).catch((error) => {
			
		});
		Navigate('/')

	})
	.catch((error) => {
		
		setAuthError (error.message);
		
	})
	.finally(()=>setIsLoading(false));
		
		};

		const loginUser=(email,password,location,Navigate)=>{
		setIsLoading(true)
		signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		const destination = location?.state?.from || '/'
		Navigate(destination)
		setAuthError('')
	})
	.catch((error) => {
		setAuthError(error.message) ;
	})
	.finally(()=>setIsLoading(false));

		}

		const signInGoogle = (location,Navigate)=>{
			setIsLoading(true)
			signInWithPopup(auth, googleProvider)
		.then((result) => {
			const user = result.user;
			const destination = location?.state?.from || '/'
			Navigate(destination)
			setAuthError('');
			saverUser(user.email,user.displayName,'PUT')
		
		}).catch((error) => {
			
		setAuthError(error.message)
		})
		.finally(()=>setIsLoading(false));
		}
		//  user state change
		useEffect(()=>{
			onAuthStateChanged(auth, (user) => {
				if (user) {
			
				setUser(user)
				getIdToken(user)
				.then(idToken =>{
					setToken(idToken)
				});
				
				
				} else {
					setUser({})
				}
				setIsLoading(false)
			});
		},[user.email])
		useEffect(()=>{
			fetch(`https://ancient-cliffs-95012.herokuapp.com/users/${user.email}`)
			.then(res =>res.json())
			.then(data =>setAdmin(data.admin))
		},[user.email])

		const logOut = ()=>{
			
			signOut(auth).then(() => {
			// Sign-out successful.
			}).catch((error) => {
			// An error happened.
			});

		

		};
		const saverUser = (email,displayName,method) =>{
			const user = {email,displayName}
			fetch('https://ancient-cliffs-95012.herokuapp.com/users',{
				method:method,
				headers:{
					'content-type':'application/json'
				},
				body:JSON.stringify(user)

			})
			.then(res =>res.json())
			.then(data =>console.log(data))
		};
			return{
				user,
				admin,
				token,
				registerUser,
				logOut,
				loginUser,
				signInGoogle,
				isLoading,
				authError
			}
		
}

export default useFirebase;