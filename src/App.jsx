import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  addContact = (e) => {
    e.preventDefault();
    let id = uuidv4();
    const contact = {
      name: this.state.name,
      id,
      number: this.state.number,
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
    this.reset();
  };

  inputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };
  // TODO: Фильтр добавить

  render() {
    return (
      <div>
        <form onSubmit={this.addContact}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.inputChange}
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            Tel:
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.inputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <ul>
          <h2>Contacts</h2>
          <label>
            Find contacts by name
            <input
              type="text"
              value={this.state.filter}
              onChange={this.inputChange}
              name="filter"
            />
          </label>
          {this.state.contacts.map((item) => {
            return (
              <li key={item.id}>
                {item.name} : {item.number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Phonebook;
