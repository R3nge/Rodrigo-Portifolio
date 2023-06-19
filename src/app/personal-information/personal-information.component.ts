import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Nome', 'Rodrigo Gomes Malaquias'],
    ['Experiência', 'Desenvolvimento Web Full-Stack'],
    ['Educação', 'Ensino Técnico'],
    ['Interesses', 'Estágio, PJ'],
  ];

  aboutMe: string[] = [
    'Estudante do IFSEMG curso técnico Informática, comecei minha jornada de progrador a 3 anos com a paixão por Back-End e desde então venho apurando meus conhecimentos, Atualmente trabalho como Desenvolvedor Fullstack Freelancer estudando e realizando projetos para conhecidos e para aumentar meu portifólio, tenho conhecimentos em PHP com o Framework Laravel, JavaScript com Angular e Banco de dados MySQL, SQL e PostgreSQL que foram adquiridos graças ao estudo autodidata e cursos com certificação.',
   
  ];

  constructor() {}

  ngOnInit(): void {}
}
