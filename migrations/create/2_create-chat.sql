CREATE TABLE public.chat (
	id serial NOT NULL,
	fullname text NULL,
	admin boolean NULL,
 	userid integer NOT NULL,
	time timestamp NULL DEFAULT CURRENT_TIMESTAMP(3),
	PRIMARY KEY(id),
	FOREIGN KEY(userid) REFERENCES public.user(id)
  );

 