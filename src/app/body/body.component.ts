import { Component } from "@angular/core";
import { mock_playlists } from "./mock-playlists";
import { Playlist } from "./playlist.model";

@Component({
    selector: "etsy-body",
    templateUrl: "body.component.html"
})
export class BodyComponent {
    playlists:Playlist[] = [];

    constructor() {
        for (var playlist of mock_playlists) {
            this.playlists.push(new Playlist(playlist));
        }
    }
}
