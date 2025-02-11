# Области хранения:

- БД (json-server)
- BFF
  редакс стор

# Сущности приложения

- пользователь: БД (список пользователей), BFF (сессия текущего), стор (отображение в браузере)
- роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), стор (использование на клиенте)
- статья: БД (список статей), стор (отображение в браузере)
- комментарий: БД (список комментарией), стор (отображение в браузере)

# Таблицы БД:

- пользователи   Users:    id | login     | password  | registered_at | role_id

- роли           Roles:    id | name      |           |               |       

- статьи         Posts:    id | title     | image_url | content       | published_at

- комментарии    Comments: id | author_id | post_id   | content


# Схема состояния на BFF:

- схема текущего пользователя: login | password | role

# Схема для редакс стора (на клиенте):

- user: id | login | role

- users: массив user: id | login | registeredAt | role

- posts: массив post: id | title | imageUrl | publishedAt | commmentsCount

- post: id | title | content | publishedAt | comments: массив comment: id | author | content | publishedAt