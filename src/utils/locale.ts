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
         c_password_label: "Confirm Password",
         hello:"Hello",
         layout:{
             dashboard:"Dashboard",
             home:"Home"
         },
         student_layout:{
            dashboard:"Dashboard",
            course_content:"Course Content",
            assignment:"Assignments",
            assessment:"Assessments",
            assessment_submission:"Assessment Submissions",
        },
         landing:{
            cards:{
                stat_card_classroom:"Total Classrooms",
                stat_card_course_content:"Total Course Content",
                stat_card_application:"Total Applications",
                stat_card_assessments:"Total Assessments",
            },
            data_table:{
                layout_title:"Dashboard",
                title:"Student Application",
                student_name:"Student",
                class_name:"Class Name",
                status:"Status",
                submitted_date:"Submitted Date",
            },
        },
         classroom:{
            data_table:{
                layout_title:"Class Rooms",
                title:"You have: ",
                title2:"Classroom  ",
                button:"Add Classroom",
                modal_title:"Add New Classroom",
                modal_button:"CREATE CLASSROOM",
                modal_placeholder:"Classroom Name",
                class_name:"Name",
                class_url:"Class Url",
                created_date:"Created Date"
            }
        },
         course_content:{
            data_table:{
                layout_title:"Course Content",
                button:"Add Content",
                title:"Title",
                classroom:"Classroom",
                pdf_content:"Pdf Content",
                video_content:"Video Content",
                follow_up_file:"Follow-up File",
                follow_up_solution:"Follow-up Solution",
                published_date:"Published Date",

            },
        },
         follow_ups:{
             data_table:{
                 layout_title:"Follow-up Submissions" ,
                 student_name:"Student Name",
                 solution:"Solution",
                 comment:"Comment",
                 score:"Score",
                 total_score:"Total Score",
                 submitted_date:"Submitted Date"
             }
          },
         assessment:{
                data_table:{
                    layout_title:"Assessments",
                    modal_btn:"Create Assessment",
                    title:"Title",
                    question_file:"Question File",
                    answer_pdf:"Answer Pdf",
                    publish_date:"Publish Date",
                    created_date:"Created Date",
                },
             modal:{
                 modal_title:"Add Assessment",
                 title_label:"Title:",
                 title_placeholder:"Exam Title",
                 date_label:"Publish Date:",
                 select_classroom_label:"Select Classroom:",
                 upload_assessment_file_label:"Upload Assessment File:",
                 upload_solution_file_label:"Upload Solution File:",
                 publish_solution_date_label:"Publish Solution Date",
                 create_content_button:"CREATE ASSESSMENT",
             }

         },
         assessment_submission:{
                data_table:{
                    layout_title:"Assessment Submissions",
                    title:"Title",
                    student_name:"Student Name",
                    question_file:"Question File",
                    answer_pdf:"Answer Pdf",
                    submitted_date:"Submitted Date",
                    created_date:"Created Date",
                    select_class:"Select Class",
                    select_course_content:"Select Course Content",

                }
            },
         assignment:{
                data_table:{
                    layout_title:"Soumission des évaluations",
                    select_class:"Select Class",
                    select_course_content:"Select Course Content",
                    student_name:"Student Name",
                    solution:"Solution",
                    comment:"Comment",
                    submitted_date:"Submitted Date",
                }
            },
         pass_exams:{
             data_table:{
                 layout_title:"Pass Exams",
                 button:"Add content",
                 title:"Title",
                 class:"Class",
                 question_file:"Question File",
                 answer_pdf:"Answer Pdf",
                 answer_video:"Answer Video",
                 publish_date:"Publish Date",
                 created_date:"Created Date",
             }
         },
         create_live:{
                data_table:{
                    layout_title:"Live Sessions",
                    heading:"All Live Sessions",
                    button:"Creer Une séance",
                    meeting_code: "Meeting Code",
                    class:"Class",
                    participants: "#Participants",
                    status:"Status",
                    session_date:"Session Date",
                }
            },
        },
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
            c_password_label: "Confirmez le mot de passe",
            hello:"Salut",
            layout:{
                dashboard:"Tableau de bord",
                home:"Acceuil"
            },
            student_layout:{
                dashboard:"Tableau de bord",
                course_content:"Contenu du Cours",
                assignment:"Devoirs",
                assessment:"Évaluations",
                assessment_submission:"Soumission des évaluations",
            },
            landing:{
                cards:{
                    stat_card_classroom:"Nombre Total de Salles de Classe",
                    stat_card_course_content:"Total Contenu des cours",
                    stat_card_application:"Nombre Total de Demandes",
                    stat_card_assessments:"Nombre Total d'évaluations",
                },
                data_table:{
                    layout_title:"Tableau de bord",
                    title:"Demande des étudiant(e)s",
                    student_name:"Étudiant(e)",
                    class_name:"Titre du cours",
                    status:"Statut",
                    submitted_date:"Date de Soumission",
                },
            },
            classroom:{
                data_table:{
                    layout_title:"Salle de Classes",
                    title:"Vous avez: ",
                    title2:"Salle de Classe  ",
                    button:"Ajouter Une Salle",
                    modal_title:"Ajouter Une Salle",
                    modal_button:"CREER UNE SALLE",
                    modal_placeholder:"Nom de la salle",
                    class_name:"Nom",
                    class_url:"Lien de la Classe",
                    created_date:"Date de Création"
                }
            },
            course_content:{
                data_table:{
                    layout_title:"Contenu du Cours",
                    button:"Ajouter Un Contenu",
                    title:"Titre",
                    classroom:"Salle de Classe",
                    pdf_content:"Contenu Pdf",
                    video_content:"Contenu vidéo",
                    follow_up_file:"Fichier de suivi",
                    follow_up_solution:"Solution de suivi",
                    published_date:"Date de Publication",

                },
            },
            follow_ups:{
                data_table:{
                    layout_title:"Submission de suivis" ,
                    student_name:"Etudiant(e)s",
                    solution:"Solution",
                    comment:"Commentaire",
                    score:"Note",
                    total_score:"Résultat Totale",
                    submitted_date:"Date de soumission"
                }
            },
            assessment:{
                data_table:{
                    layout_title:"Évaluations",
                    modal_btn:"Créer l'évaluation",
                    title:"Titre",
                    question_file:"Fichier de questions",
                    answer_pdf:"Pdf pour Solution",
                    publish_date:"Date de publication",
                    created_date:"Date de création",
                },
                modal:{
                  modal_title:"Ajouter une évaluation",
                  title_label:"Titre:",
                  title_placeholder:"Titre de l'évaluation",
                  date_label:"Date de publication:",
                  select_classroom_label:"Choisir une salle:",
                  upload_assessment_file_label:"Charger le fichier d'évaluation:",
                  upload_solution_file_label:"Charger le fichier de solution:",
                  publish_solution_date_label:"Date pour publier la solution",
                 create_content_button:"Créer l'évaluation",
                }
            },
            assessment_submission:{
                data_table:{
                    layout_title:"Soumission des évaluations",
                    title:"Titre",
                    student_name:"Étudiant(e)",
                    question_file:"Fichier de questions",
                    answer_pdf:"Pdf pour Solution",
                    submitted_date:"Date de soumission",
                    created_date:"Date de création",
                    select_class:"choisir le Cours",
                    select_course_content:"Choisir le Contenu du Cours",
                },

            },
            assignment:{
                data_table:{
                    layout_title:"Soumission des évaluations",
                    select_class:"choisir une classe",
                    select_course_content:"choisir le contenu des cours",
                    student_name:"Étudiant(e)",
                    solution:"Solution",
                    comment:"Commentaire",
                    submitted_date:"Date de soumission",
                }
            },
            pass_exams:{
                data_table:{
                    layout_title:"Épreuves précédentes",
                    button:"Ajouter un contenu",
                    title:"Titre",
                    class:"Cours",
                    question_file:"Fichier de questions",
                    answer_pdf:"Pdf pour Solution",
                    answer_video:"Vidéo pour Solution",
                    publish_date:"Date de publication",
                    created_date:"Date de création",
                }
            },
            create_live:{
                data_table:{
                    layout_title:"Séances en Direct",
                    heading:"Toutes les séances en direct",
                    button:"Creer Une séance",
                    meeting_code: "Identifiant de la séance",
                    class:"Classe",
                    participants: "#Participant(e)s",
                    status:"Statut",
                    session_date:"Date de séance",
                }
            },
        }
      },
    }
  });

export default i18n;