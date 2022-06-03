# Birthminder - cahier des charges
## L'objectif
Birthminder est une application qui se chargera de rappeler aux utilisateurs les anniversaires de leur proche.
## Plus en détails
L'application permettra de se créer un compte (en indiquant diverses informations, tel qu'un email, une date d'anniversaire, et autre).
L'utilisateur pourra créer divers groupes de personnes dont il veut se souvenir de l'anniversaire (famille, amis, travail, et groupe privé pour les personnes dont seul lui veut se souvenir)
L'utilisateur devrait pouvoir ajouter des gens dans un groupe qui possèdent un compte ou qui n'en possède pas. Chaque personne présente dans un groupe sera mis au courant de l'anniversaire des autres membres du groupe.
Le chef du groupe pourra inviter des gens dans le groupe en envoyant un lien, ou en les invitant directement grâce à l'application (s'ils ont un compte).
L'application se chargera de notifier tous les membres du groupe de l'anniversaire de la personne. (soit par notifications push, soit par email, suivant les préférences de l'utilisateur)
Les groupes doivent avoir différentes options, comme pouvoir mettre en sourdine les notifications du groupe, customiser les messages de notifications de ce groupe, etc.
L'application web & mobile communiqueront à une API.
Les groupes pourront être publique ou privé.


## Besoins
* Une interface
* Un système de groupe
* Une API
* Un moyen de stocker les différentes données
* Un système de compte
* Un système qui envoie une notification lorsque c'est l'anniversaire de la personne

## Technologies
À définir

## Publique cible
Absolument n'importe qui qui a du soucis à se souvenir des dates d'anniversaire sera susceptible d'utiliser Birthminder.
## Versions
* ### Alpha
  Une simple application capable d'enregistrer les dates et d'alerter lorsque c'est l'anniversaire grâce à une interface. Il faudra évidemment le nécessaire pour que l'application puisse se souvenir des données.
* ### v1
  #### Système de compte
  Les utilisateurs doivent pouvoir se créer un compte sur l'application.
  #### API
  L'application enverra des requêtes vers une API pour les différentes actions qu'elle doit effectuer. Exemple : créer un utilisateur, modifier un utilisateur, etc..
* ### v2
  L'utilisateur pourra créer des groupes (privés ou publiques), dans lesquels il ajoutera les gens de son choix dont il veut se souvenir des anniversaires. Il pourra inviter des gens dans son groupe soit grâce aux informations des autres utilisateurs (un pseudo ou un email par exemple), ou grâce à un lien d'invitation.