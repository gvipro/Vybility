
Music app, which generates music playlist based on your mood. You can login, register, logout, take the mood quiz. 

Back-end: Node/MongoDB
Front-end: EJS/Bootstrap

                                            IMPORTANT
The algorithm developed for the playlist generator is inefficient and very basic. This is an University project which was supposed to be developed by a team of 5, however, it was entirely developed by me in 5 days. There could be bugs and errors due to the short amount of time invested in the development process. 

The database used is MongoDB, only the login credentials are stored inside the database. The results from the quiz are not saved in the database, the playlist is stored in a  script file, rather than being pulled from the database. 


                                            Instalation:

1.Git clone the repository 

2.CD/Open the repository from the terminal
                                    
3.Node "app.js" -  The server will start on PORT: "localhost:5000"
                                    
                                            HOW TO USE:

After you register you would be able to login, on the home page/dashboard you will see 2 options:

Option 1:
"Take a quiz!" - this button will take you to the mood quiz, which is expected to generate a playlist after you have filled the questionnaire and you have submited your answers.  
   I would be working on this project in my free time, there are many improvement still to be done.
                                            
   TO DO list:

   1.Store song names in the database and pull the results from the database when the questionnaire is submited.
   2.Improve the algorithm, which generates the playlist.
   3.Add more moods.

Option 2:
"Answer questionnaire!" - this button will take you to another questionnaire, which is built from a JSON file. This questionnaire is a test which was built in order for me to learn how to use AJAX and JSON files. This would be used to improve the design of the first questionnaire. The results from this questionnaire get saved in the database.
                           
                               
                                
                                
