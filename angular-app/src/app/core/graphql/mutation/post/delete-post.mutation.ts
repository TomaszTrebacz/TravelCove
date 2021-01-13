import { Injectable } from '@angular/core';
import { Mutation, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class DeletePostGQL extends Mutation {
  document = gql`
    mutation($id: Int!) {
      deletePost(id: $id)
    }
  `;
}
