import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Itinerario } from "@app/models/itinerario.model";
import { ItinerarioService } from "@app/services/itinerario.service";

@Component({
  selector: "app-onibus-itinerario",
  templateUrl: "./onibus-itinerario.component.html",
  styleUrls: ["./onibus-itinerario.component.css"],
})
export class OnibusItinerarioComponent implements OnInit {
  
  constructor(
    private itinerarioService: ItinerarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  @ViewChild("googleMap",{static: false}) public googleMap: any;
  
  itinerario: Itinerario;
  lat: number;
  lng: number;
  zoom: number = 10;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.itinerarioService.readById(id).subscribe((itinerario) => {
      this.itinerario = itinerario;
      this.lat = this.itinerario[0].lat;
      this.lng = this.itinerario[0].lng; 
    });
  }

  voltar(): void {
    this.router.navigate(["/onibus"]);
  }
}
