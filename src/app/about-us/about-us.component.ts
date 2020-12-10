import { Component, OnInit } from '@angular/core';
import {Service} from '../model/service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  serviceList: Service[] = [
    {icon: 'assets/icons/car.png' , title: 'Disk ração', description: 'Uma solução para a falta de tempo de quem tem animais e sabe que é importante não deixar faltar ração em casa.'},
    {icon: 'assets/icons/brush.png' , title: 'Banho & tosa', description: 'Temos uma equipe de profissionais bem qualificados para deixar seu animal de estimação mais limpo, bonito e saudável.'},
    {icon: 'assets/icons/vet.png' , title: 'Clínica Veterinária', description: 'Nossa equipe de médicos veterinários atua na prevenção e cura de doenças dos animais e na orientação para que os donos proporcionem o seu bem-estar.'},
    {icon: 'assets/icons/medicine.png' , title: 'Farmácia', description: 'Aqui você encontra os medicamentos e insumos necessários para dar procedimento ao tratamento do seu pet.'},
    {icon: 'assets/icons/accessories.png' , title: 'Acessórios Pet', description: 'Temos brinquedos, camas, casinhas, caixas de transporte, sanitários, comedouros, guias, coleiras, peitorais, produtos para higiene e muito mais'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
