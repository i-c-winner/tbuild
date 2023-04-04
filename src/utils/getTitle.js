function getTitle(title){
  switch (title) {
    case 'id':
      return 'id'
    case 'name':
      return 'Наименование'
    case 'type':
      return 'Тип'
    case 'value':
      return 'Общее кол-во'
    case 'init_price':
      return 'Стоимость ед.'
    case 'init_type':
      return ''
    case "total_price":
      return "Общая стоиомсть"
    case "ordered_value":
      return "Заказаное кол-во"
    case "design_section":
      return "Раздел проекта"
    case "price":
      return "Траты по позиции"
    case "last_price":
      return "Оставщийся бюджет по позиции"
    default:
      return title
  }
}

export default getTitle
