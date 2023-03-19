
const price={
  send: 250,
  i_beams: 3500,
  pump: 200,
  armature_15: 20,
  armature_20: 30,
  armature_30: 45,
  pipe_15: 120,
  pipe_20: 175,
  valve_25: 200,
  valve_32: 250,
  valve_40: 300,
}
const design_sections=['AR', 'KZ', 'VK']
const user = {
  name: 'Ivan',
  secondName: 'Petrov',
  company: 'ABC Constructor',
  job: 'site namnager'
}

const projects = {
  build: {
    name: 'Жилой дом по адресу',
    id: 1
  },
  work: {
    name: 'Завод по производству... ',
    id: 2
  }
}

const main = [
  {
    id: 100,
    name: "Send",
    type: "materials",
    value: 5200,
    init_type: "m3",
    init_price: price.send,
    total_price: 0,
    ordered_value: 2300,
    design_section: 'AR'
  },
  {
    id: 200,
    name: "I-Beams",
    type: "materials",
    value: 250,
    init_type: "item",
    init_price: price.i_beams,
    total_price: 0,
    ordered_value: 100,
    price: 0,
    last_price:0,
    design_section: 'KM'
  },
  {
    id: 300,
    name: "Pump",
    type: "equimpent",
    value: 156,
    init_type: "item",
    init_price: price.pump,
    total_price: 0,
    ordered_value: 10,
    price: 0,
    last_price:0,
    design_section: 'VK'
  },
  {
    id: 301,
    name: "pipe_15",
    type: "materials",
    value: 2300,
    init_type: "m",
    init_price: price.pipe_15,
    total_price: 0,
    ordered_value: 230,
    price: 0,
    last_price:0,
    design_section: 'VK'
  },
  {
    id: 302,
    name: "pipe_20",
    type: "materials",
    value: 3200,
    init_type: "m",
    init_price: price.pipe_20,
    total_price: 0,
    ordered_value: 2300,
    price: 0,
    last_price:0,
    design_section: 'VK'
  },
  {
    id: 303,
    name: "valve d-25mm",
    type: "materials",
    value: 3200,
    init_type: "m",
    init_price: price.valve_25,
    total_price: 0,
    ordered_value: 2300,
    price: 0,
    last_price:0,
    design_section: 'VK'
  },
  {
    id: 304,
    name: "valve d-32mm",
    type: "materials",
    value: 3200,
    init_type: "m",
    init_price: price.valve_32,
    total_price: 0,
    ordered_value: 2300,
    price: 0,
    last_price:0,
    design_section: 'VK'
  },
  {
    id: 305,
    name: "valve d-40mm",
    type: "materials",
    value: 3200,
    init_type: "m",
    init_price: price.valve_40,
    total_price: 0,
    ordered_value: 2300,
    price: 0,
    last_price:0,
    design_section: 'VK'
  },
  {
    id: 400,
    name: "armature_15",
    type: "materials",
    value: 2500,
    init_type: "tn",
    init_price: price.armature_15,
    total_price: 0,
    ordered_value: 230,
    price: 0,
    last_price:0,
    design_section: 'KZ'
  },
  {
    id: 401,
    name: "armature_20",
    type: "materials",
    value: 3500,
    init_type: "tn",
    init_price: price.armature_20,
    total_price: 0,
    ordered_value: 230,
    price: 0,
    last_price:0,
    design_section: 'KZ'
  },
  {
    id: 402,
    name: "armature_30",
    type: "materials",
    value: 32000,
    init_type: "tn",
    init_price: price.armature_30,
    total_price: 0,
    ordered_value: 230,
    price: 0,
    last_price:0,
    design_section: 'KZ'
  },
  {
    id: 403,
    name: "armature_15",
    type: "materials",
    value: 2500,
    init_type: "tn",
    init_price: price.armature_15,
    total_price: 0,
    ordered_value: 230,
    price: 0,
    last_price:0,
    design_section: 'KZ'
  }
]

export {user, projects, main, design_sections}
