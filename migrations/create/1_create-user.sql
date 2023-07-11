CREATE TABLE public.user (
	id serial NOT NULL,
	fullname text NULL,
	username text NOT NULL,
	password text NULL,
	token text NULL,
 	admin boolean NULL,		
	userid integer NULL,
 	time timestamp NULL DEFAULT CURRENT_TIMESTAMP(3),
	PRIMARY KEY(id)
  );


  