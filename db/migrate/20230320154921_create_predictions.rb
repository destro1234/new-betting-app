class CreatePredictions < ActiveRecord::Migration[6.1]
  def change
    create_table :predictions do |t|
      t.string :winner
      t.string :reason
      t.integer :game_id
      t.integer :user_id


      t.timestamps
    end
  end
end
