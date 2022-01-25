# Guilhem's entry test

Hello reviewer, i hope you're well, it took me something like a big day

### top-level layout directory layout

    .
    ├── components              # here we put every react components apart pages
    ├── constants               # things ... that are constants
    ├── models                  # Data models, transformers and linked hooks
    └── utils                   # logic that don't goes in models

we can break down components in atomics components

    .
    ├── ...
    ├── components
    │   ├── atoms               # only styled.x stuffs, very small blocks
    │   ├── molecule            # complexe blocks created from groups of atoms, but still pure
    │   ├── organims            # complexe blocks hydrated with data
    │   └── templates           # utils components, layout and stuffs
    └── ...

### Automated tests

We have some unit tests under test folder, it will mainly test the logic from utils, and we have some cypress integrations tests under the cypress folder, that should check if app give us entities with working fixtures, and should check if the app show ErrorView with broken fixtures. note that i kinda discover cypress, but i will just spam every new code i'll do with that, started with my side project

### Models

Here we have data models

```typescript
export interface User {
  firstname: string;
  lastname: string;
  photoURL: string;
}
```

with associated transformers, to extract data from request

```typescript
export const createUser: Transformer<User> = (user) => {
  const { name, picture } = user.results[0];
  return {
    firstname: name.first,
    lastname: name.last,
    photoURL: picture.medium,
  };
};
```

and the hook that provide the model to UI

```typescript
export const useUser = createQuery<User>({
  url: url.USER,
  transformer: createUser,
});
```

... "but **bro**, thats not a hook",

well, **yes**. but is that overengineering ? **also yes**.

I just wanted to show off some cool closure hook's factory 🦾🤖
you can just do something like that:

```typescript
export const useUser = (options) =>
  useQuery<User>(url.USER, createUser, options);
```

### Cool factory that is not overengineering

We have a fetcher factory that you can use this way

```typescript
const { data, error } = useSWR(url, createFetcher<T>(transformer), options);
```

that will create a fetcher with a transformer with a generic type
