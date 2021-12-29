import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
    PrimaryGeneratedColumn
} from 'typeorm';


@Entity('organisation')
export class Organisation extends BaseEntity {
    @PrimaryGeneratedColumn()
	id: number;

	@Column({
		
		nullable:false
	})
	organisation_name: String;

    @Column({
		type: 'numeric',
		nullable:false
	})
	abn_number: number;

    @Column({
		
		nullable:false
	})
	contact_email: String;

    @Column({
		type: 'numeric',
		nullable:false
	})
	contact_number: number;



	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
	
}