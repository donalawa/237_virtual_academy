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
         copywright_text: "© 2023 237 Virtual Academy. All rights reserved"
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
            copywright_text: "© 2023 237 Académie virtuelle. Tous les droits sont réservés"
        }
      },
    }
  });

export default i18n;