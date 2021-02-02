# Clean architecture + TDD on front end project

I've tried **TDD** with **Clean architecture** implementation in frontend side. It can run either with **InMemory** data or with data from **PokeApi** (rest API). It works with **React** but strength of this concept is to easily change framework and sources (database, ...). So if you fork it, you can add **VueJS** or **AngularJS** without any issues and without touch of core logic.

**All core logic is completely independent from data source and framework.**

I'll do more complex projects with this concept because it's kinda a prerequisite for my actual and future works as freelancer. If you are interested as I am, please contact me or follow me on Github to check next updates.

It runs with **RxJS** for observable capabilities (next time, I will focus on **Redux** and **Redux-Thunk**).

## Installation

```
yarn
```

## Start project

You can start it with two differents sources :

**InMemory**
```
yarn start
```

**Rest API**
```
yarn start:rest
```
