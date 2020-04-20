export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Iauthor = {
  id: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  posts?: Maybe<Array<Maybe<Ipost>>>;
};


export type Iauthorpostsargs = {
  findTitle?: Maybe<Scalars['String']>;
};

export type Ipost = {
  id: Scalars['Int'];
  title: Scalars['String'];
  author: Iauthor;
};

export type Iquery = {
  posts?: Maybe<Array<Maybe<Ipost>>>;
};
