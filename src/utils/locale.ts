import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
         home_welcome: "Welcome To",
         home_title: "Revolutionize your education with 237 Virtual Academy.",
         home_descriptioon: "Our Distance Learning Solutions provides you with all the tools you need to succeed in your studies from anywhere. Join live sessions, access course content and assessments, and communicate with your classmates and teacher.",
         register_text: "Signup",
         login_text: "Login",
         how_it_works: "How It Works",
         step_one_title: "Create your teacher account",
         step_one_description: "Create an account as a teacher and login to get started",
         step_two_title: "Create your different classrooms",
         step_two_description: "Create different classrooms for different subjects",
         step_three_title: "Add Contents",
         step_three_description: "Upload contents under the different classrooms",
         waiting_question: "What are you waiting for?",
         features_one: "Join live class sessions",
         features_two: "Access past exams and their solutions",
         features_three: "Access recorded versions of class sessions",
         copywright_text: "© 2023 237 Virtual Academy. All rights reserved",
         login_title: "Login",
         account_text: "Don't have an account?",
         welcome_back_text: "Welcome Back",
         welcome_back_sub: "Nice to see you",
         email_required_error: "Email field is required",
         email_valid_error: "Enter a valid email",
         password_length_error: "Password must be above 4 characters",
         password_required_error: "Password Required",
         c_password_required_error: "Confirm password is required",
         login_success_text: "Logged In Succesfuly",
         login_error_text: "Email or password is wrong",
         username_required_error: "Username is required",
         password_match_error: "Passwords Must Match",
         registered_successfully: "User Registered",
         register_failed_error: "Resgistration Failed",
         create_account_title: "Create Account",
         create_account_sub: "What are you waiting for ?",
         register_form_titlle: "Register",
         r_account_text: "Already have an account? ",
         username_label: "Username",
         password_label: "Password",
         c_password_label: "Confirm Password"
        }
      },

      fr: {
        translation: {
            home_welcome: "Bienvenue à",
            home_title: "Révolutionnez votre éducation avec 237 Virtual Academy.",
            home_descriptioon: "Nos solutions d'apprentissage à distance vous fournissent tous les outils dont vous avez besoin pour réussir vos études où que vous soyez. Rejoignez des sessions en direct, accédez au contenu et aux évaluations des cours et communiquez avec vos camarades de classe et votre enseignant.",
            register_text: "S'inscrire",
            login_text: "S'identifier",
            how_it_works: "Comment ça fonctionne",
            step_one_title: "Créez votre compte enseignant",
            step_one_description: "Créez un compte en tant qu'enseignant et connectez-vous pour commencer",
            step_two_title: "Créez vos différentes salles de classe",
            step_two_description: "Créez différentes salles de classe pour différentes matières",
            step_three_title: "Ajouter du contenu",
            step_three_description: "Télécharger du contenu sous les différentes salles de classe",
            waiting_question: "Qu'est-ce que tu attends?",
            features_one: "Rejoignez des sessions de cours en direct",
            features_two: "Accéder aux examens passés et à leurs solutions",
            features_three: "Accéder aux versions enregistrées des sessions de cours",
            copywright_text: "© 2023 237 Académie virtuelle. Tous les droits sont réservés",
            login_title: "Connexion",
            account_text: "Vous n'avez pas de compte ?",
            welcome_back_text: "Content de te revoir",
            welcome_back_sub: "Ravi de vous voir",
            email_required_error: "Le champ email est requis",
            email_valid_error: "Entrez un email valide",
            password_length_error: "Le mot de passe doit avoir plus de 4 caractères",
            password_required_error: "Mot de passe requis",
            c_password_required_error: "Confirmer le mot de passe est requis",
            login_success_text: "Connexion réussie",
            login_error_text: "Email ou mot de passe incorrect",
            username_required_error: "Nom d'utilisateur est nécessaire",
            password_match_error: "Les mots de passe doivent correspondre",
            registered_successfully: "Utilisateur enregistré",
            register_failed_error: "L'enregistrement a échoué",
            create_account_title: "Créer un compte",
            create_account_sub: "Qu'est-ce que vous attendez?",
            register_form_titlle: "S'enregistrer",
            r_account_text: "Vous avez déjà un compte? ",
            username_label: "Nom d'utilisateur",
            password_label: "Mot de passe",
            c_password_label: "Confirmez le mot de passe"
        }
      },
    }
  });

export default i18n;