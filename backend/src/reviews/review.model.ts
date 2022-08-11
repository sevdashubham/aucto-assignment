export class Review {
  constructor(
    public id: string,
    public bookId: string,
    public rating: number,
    public reviewText: string,
  ) {}
}
