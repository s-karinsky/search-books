# Апи-ключ
В корне проекта создать файл `.env`, в нем определить переменную `REACT_APP_API_KEY`

# Немного об апи
Книга в ответе может встречаться несколько раз. Можно такие случаи фильтровать на клиенте, но тогда с пагинацией возникают проблемы, и количество выводимых книг при каждом запросе получится разным. В общем, я решил не изобретать и сделать вид, что так и доллжно быть.
Как-то некорректно апи отдает результаты одного и того же запроса с разными параметрами пагинации. `totalItems` очень сильно отличается в зависимости от переданного `startIndex`, так что при выводе используется только `totalItems` из самого первого запроса.
## А еще `totalItems` пойман на лжи
При некоторых запросах говорит про 120 результатов, но уже при `startIndex=90` отдает пустой массив. Из-за этого логика отображения кнопки **Load more...** может работать некорректно

# Проект сделан на create-react-app, запускается абсолютно классически
А еще задеплоил на версель, чтобы проще смотреть было https://search-books-virid.vercel.app/